#
# Cookbook Name:: workflowstats
# Recipe:: setup_code
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

directory node['workflowstats']['document_root'] do
  mode '0755'
  action :create
  recursive true
end

git node['workflowstats']['source_directory'] do
  repository node['workflowstats']['source_repository']
  revision 'master'
  action :sync
end

directory "#{node['workflowstats']['source_directory']}/client/dist" do
  mode '0755'
  action :create
end

=begin
execute 'install_npm_dependencies' do
  cwd node['workflowstats']['source_directory']
  command '/usr/bin/npm install'
end

execute 'build_client_app' do
  cwd node['workflowstats']['source_directory']
  command './gulp'
end
=end
