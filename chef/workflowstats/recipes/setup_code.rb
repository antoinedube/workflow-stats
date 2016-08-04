#
# Cookbook Name:: workflowstats
# Recipe:: setup_code
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

execute 'fetch_code' do
  cwd '/home/vagrant'
  command 'git clone https://github.com/antoinedube/workflow-stats.git'
end

execute 'install_npm_dependencies' do
  cwd '/home/vagrant/workflow-stats'
  command 'npm install'
  user 'vagrant'
  group 'vagrant'
end

directory '/home/vagrant/workflow-stats/client/dist' do
  owner 'vagrant'
  owner 'vagrant'
  mode '0755'
  action :create
end

execute 'build_client_app' do
  cwd '/home/vagrant/workflow-stats'
  command './gulp'
  user 'vagrant'
  group 'vagrant'
end
