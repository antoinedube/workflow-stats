#
# Cookbook Name:: workflowstats
# Recipe:: create_user
#
# Copyright (c) 2016 The Authors, All Rights Reserved.


group node['workflowstats']['group']

user node['workflowstats']['user'] do
  group node['workflowstats']['group']
  system true
  shell '/bin/bash'
  home "/home/#{node['workflowstats']['user']}"
end

directory "/home/#{node['workflowstats']['user']}" do
  owner node['workflowstats']['user']
  group node['workflowstats']['group']
  mode '0755'
  action :create
  recursive true
end
