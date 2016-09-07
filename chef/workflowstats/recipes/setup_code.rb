#
# Cookbook Name:: workflowstats
# Recipe:: setup_code
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

directory node['workflowstats']['document_root'] do
  owner node['workflowstats']['user']
  group node['workflowstats']['group']
  mode '0755'
  action :create
  recursive true
end

git node['workflowstats']['source_directory'] do
  repository node['workflowstats']['source_repository']
  revision 'master'
  action :sync
  user node['workflowstats']['user']
  group node['workflowstats']['group']
end

directory "#{node['workflowstats']['source_directory']}/logging" do
  owner node['workflowstats']['user']
  group node['workflowstats']['group']
  mode '0755'
  action :create
end

directory "#{node['workflowstats']['source_directory']}/client/dist" do
  owner node['workflowstats']['user']
  group node['workflowstats']['group']
  mode '0755'
  action :create
end

execute 'install_npm_dependencies' do
  cwd node['workflowstats']['source_directory']
  command 'npm install --unsafe-perm true'
  user node['workflowstats']['user']
  group node['workflowstats']['group']
  environment "HOME" => "/home/http"
end

execute 'build_client_app' do
  cwd node['workflowstats']['source_directory']
  command './gulp'
  user node['workflowstats']['user']
  group node['workflowstats']['group']
  environment "HOME" => "/home/http"
end
