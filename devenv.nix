{ pkgs, ... }:

{
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    pnpm = {
      enable = true;
      package = pkgs.pnpm_12;
      install.enable = true;
    };
  };
  tasks = {
    "web:dev".exec = "pnpm --filter web dev";
    "storybook:dev".exec = "pnpm --filter storybook dev";
  };
  profiles = {
    web.module.processes.web.exec = "pnpm --filter web dev";
    storybook.module.processes.storybook.exec = "pnpm --filter storybook dev";
  };
}
