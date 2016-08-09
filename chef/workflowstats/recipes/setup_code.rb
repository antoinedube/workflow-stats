#
# Cookbook Name:: workflowstats
# Recipe:: setup_code
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

directory '/home/vagrant/workflow-stats' do
  owner 'vagrant'
  group 'vagrant'
  mode '0755'
  action :create
end

git '/home/vagrant/workflow-stats' do
  repository 'https://github.com/antoinedube/workflow-stats.git'
  revision 'master'
  action :sync
  user 'vagrant'
  group 'vagrant'
end

execute 'install_npm_dependencies' do
  cwd '/home/vagrant/workflow-stats'
  command 'npm install'
  user 'vagrant'
  group 'vagrant'
end

directory '/home/vagrant/workflow-stats/client/dist' do
  owner 'vagrant'
  group 'vagrant'
  mode '0755'
  action :create
end

execute 'build_client_app' do
  cwd '/home/vagrant/workflow-stats'
  command './gulp'
  user 'vagrant'
  group 'vagrant'
end
