# syntax=docker/dockerfile:1
# Multi-arch: linux/amd64 (x64) + linux/arm64 (Apple Silicon, Raspberry Pi 4 / ARMv8)
#
# Build once on $BUILDPLATFORM (pnpm + Vite/Nitro), then copy .output into per-arch runtime.
#
# Layer order (cache-friendly):
#   1) pnpm install (package manifests + lockfile)
#   2) build web → packages/web/.output
#
#   docker build -f docker/web/Dockerfile -t solid-kit-web .

ARG NODE_IMAGE=node:24-alpine

FROM --platform=$BUILDPLATFORM ${NODE_IMAGE} AS build
WORKDIR /workspace

ENV CI=true

RUN corepack enable && corepack prepare pnpm@12.16.1 --activate

# --- 1. Install deps (invalidates when manifests / lockfile change) ---
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY --parents packages/*/package.json ./
COPY --parents packages/1.9/*/package.json ./
RUN pnpm install --frozen-lockfile --filter web...

# --- 2. Build web (invalidates when sources change) ---
COPY packages/1.9/ui ./packages/1.9/ui
COPY packages/1.9/m3 ./packages/1.9/m3
COPY packages/1.9/motion ./packages/1.9/motion
COPY packages/1.9/xyflow ./packages/1.9/xyflow
COPY packages/1.9/tiptap ./packages/1.9/tiptap
COPY packages/web ./packages/web
RUN pnpm --filter web build

FROM ${NODE_IMAGE} AS runtime
WORKDIR /app

RUN addgroup -S solidkit && adduser -S -G solidkit -H -s /sbin/nologin solidkit

COPY --from=build --chown=solidkit:solidkit /workspace/packages/web/.output ./.output

USER solidkit
EXPOSE 8080

ENV NODE_ENV=production \
  PORT=8080 \
  HOST=0.0.0.0

ENTRYPOINT ["node", ".output/server/index.mjs"]
