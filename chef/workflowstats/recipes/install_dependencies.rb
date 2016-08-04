#
# Cookbook Name:: workflowstats
# Recipe:: install_dependencies
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

execute 'update_system' do
  command 'apt-get -y update && apt-get -y upgrade'
  user 'root'
  group 'root'
end

execute 'install_curl' do
  command 'apt-get -y install curl'
  user 'root'
  group 'root'
end

execute 'add_remote_repository_for_nodejs' do
  command 'curl -sL https://deb.nodesource.com/setup_6.x | bash -'
  user 'root'
  group 'root'
end

execute 'install_node' do
  command 'apt-get -y install nodejs node-gyp'
  user 'root'
  group 'root'
end

execute 'install_git' do
  command 'apt-get -y install git'
  user 'root'
  group 'root'
end
