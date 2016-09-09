#
# Cookbook Name:: workflowstats
# Recipe:: migrations
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

execute 'build_client_app' do
  cwd node['workflowstats']['source_directory']
  command './sequelize db:migrate'
  user node['workflowstats']['user']
  group node['workflowstats']['group']
  environment "HOME" => "/home/http"
end
