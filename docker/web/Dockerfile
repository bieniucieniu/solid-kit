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
RUN pnpm install --frozen-lockfile --filter web...

# --- 2. Build web (invalidates when sources change) ---
COPY packages/ui ./packages/ui
COPY packages/motion ./packages/motion
COPY packages/xyflow ./packages/xyflow
COPY packages/tiptap ./packages/tiptap
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
