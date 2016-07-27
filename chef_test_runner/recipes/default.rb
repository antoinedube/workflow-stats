#
# Cookbook Name:: chef_test_runner
# Recipe:: default
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

apt_package 'git' do
  action :install
end

execute 'checkout_code' do
  cwd "/home/vagrant"
  command 'git clone https://github.com/antoinedube/workflow-stats.git'
  user 'vagrant'
  group 'vagrant'
end
