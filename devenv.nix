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

  tasks."pnpm:install".exec = "pnpm install";

  profiles = {
    web.module = {
      processes.web.exec = "pnpm --filter web dev";
      tasks."pnpm:install".before = [ "devenv:processes:web" ];
    };
    storybook.module = {
      processes.storybook.exec = "pnpm --filter storybook dev";
      tasks."pnpm:install".before = [ "devenv:processes:storybook" ];
    };
  };
}
