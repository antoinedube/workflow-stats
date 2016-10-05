#
# Cookbook Name:: workflowstats
# Recipe:: start_server
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

execute 'port_forwarding' do
  command 'iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000'
  user 'root'
  group 'root'
end

execute 'start_server' do
  cwd node['workflowstats']['source_directory']
  command 'node main.js 2>&1 > server/logging/main_js_output.log &'
  # user node['workflowstats']['user']
  # group node['workflowstats']['group']
end
