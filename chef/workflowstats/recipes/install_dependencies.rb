#
# Cookbook Name:: workflowstats
# Recipe:: install_dependencies
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

apt_package 'curl' do
  action :install
end

execute 'add_remote_repository_for_nodejs' do
  command 'curl -sL https://deb.nodesource.com/setup_6.x | bash -'
  user 'root'
  group 'root'
end

apt_package 'nodejs' do
  action :install
end

apt_package 'build-essential' do
  action :install
end

apt_package 'python' do
  action :install
end

apt_package 'redis-server' do
  action :install
end

execute 'start_redis' do
  command 'systemctl start redis'
  user 'root'
  group 'root'
end

execute 'install_node_gyp' do
  command 'npm install -g node-gyp'
  user 'root'
  group 'root'
end
