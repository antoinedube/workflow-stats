#
# Cookbook Name:: workflowstats
# Recipe:: seed_data
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

execute 'build_client_app' do
  cwd node['workflowstats']['source_directory']
  command './sequelize db:seed:all'
  user node['workflowstats']['user']
  group node['workflowstats']['group']
  environment "HOME" => "/home/http"
end
