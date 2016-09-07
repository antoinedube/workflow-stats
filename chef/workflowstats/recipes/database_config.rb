#
# Cookbook Name:: workflowstats
# Recipe:: database_config
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

directory "#{node['workflowstats']['source_directory']}/server/database" do
  owner node['workflowstats']['user']
  group node['workflowstats']['group']
  mode '0755'
  action :create
end

template "#{node['workflowstats']['source_directory']}/server/database/redis-config.json" do
  source 'redis-config.json.erb'
  owner node['workflowstats']['user']
  group node['workflowstats']['group']
  variables(
    :host => "localhost",
    :port => "6379",
    :ttl => "3600"
  )
end
