#
# Cookbook Name:: workflowstats
# Recipe:: start_server
#
# Copyright (c) 2016 The Authors, All Rights Reserved.


execute 'start_server' do
  cwd '/home/vagrant/workflow-stats'
  command 'node main.js'
  user 'vagrant'
  group 'vagrant'
end
