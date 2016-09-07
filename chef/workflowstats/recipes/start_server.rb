#
# Cookbook Name:: workflowstats
# Recipe:: start_server
#
# Copyright (c) 2016 The Authors, All Rights Reserved.


execute 'start_server' do
  cwd node['workflowstats']['source_directory']
  command 'node main.js'
  user node['workflowstats']['user']
  group node['workflowstats']['group']
end
