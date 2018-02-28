create database manage;

use manage;

create table nm_manager(
	`id` int unsigned NOT NULL AUTO_INCREMENT comment 'id',
	`username` char(20) NOT NULL comment '用户名',
	`password` char(32) NOT NULL comment '用户密码',
	`role_id` int unsigned NOT NULL comment '角色id',
	`created_at` int unsigned NOT NULL comment '创建时间',
	`modified_at` int unsigned NOT NULL comment '修改时间',
	PRIMARY KEY (`id`),
	UNIQUE KEY `username` (`username`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 comment='管理员表';

create table nm_menu(
	`id` smallint unsigned NOT NULL AUTO_INCREMENT comment 'id',
	`type` tinyint unsigned NOT NULL comment '菜单分类：1、顶部菜单；2、侧边栏菜单',
	`menu` varchar(20) NOT NULL comment '路径',
	`router_id` int unsigned NOT NULL comment '路由id',
	`created_at` int unsigned NOT NULL comment '创建时间',
	`modified_at` int unsigned NOT NULL comment '修改时间',
	PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 comment='路由表';

create table nm_router(
	`id` smallint unsigned NOT NULL AUTO_INCREMENT comment 'id',
	`path` varchar(20) NOT NULL comment '路径',
	`method` tinyint NOT NULL comment '访问的方法：1、get；2、post',
	`power_id` int unsigned NOT NULL comment '权限id',
	`created_at` int unsigned NOT NULL comment '创建时间',
	`modified_at` int unsigned NOT NULL comment '修改时间',
	PRIMARY KEY (`id`),
	UNIQUE KEY `path` (`path`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 comment='路由表';

create table nm_power(
	`id` smallint unsigned NOT NULL AUTO_INCREMENT comment 'id',
	`power` varchar(32) NOT NULL comment '权限',
	`path` char(20) NOT NULL comment '用户名',
	`created_at` int unsigned NOT NULL comment '创建时间',
	`modified_at` int unsigned NOT NULL comment '修改时间',
	PRIMARY KEY (`id`),
	UNIQUE KEY `username` (`username`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 comment='权限表';

create table nm_role(
	`id` smallint unsigned NOT NULL AUTO_INCREMENT comment 'id',
	`role` varchar(20) NOT NULL comment '用户名',
	`created_at` int unsigned NOT NULL comment '创建时间',
	`modified_at` int unsigned NOT NULL comment '修改时间',
	PRIMARY KEY (`id`),
	UNIQUE KEY `role` (`role`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 comment='角色表';

create table nm_role_power(
	`id` int unsigned NOT NULL AUTO_INCREMENT comment 'id',
	`role_id` varchar(20) NOT NULL comment '角色id',
	`power_id` varchar(20) NOT NULL comment '权限id',
	`created_at` int unsigned NOT NULL comment '创建时间',
	PRIMARY KEY (`id`),
	UNIQUE KEY `role_power` (`role_id`,`power_id`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 comment='角色权限表';

create table nm_manager_power(
	`id` int unsigned NOT NULL AUTO_INCREMENT comment 'id',
	`manager_id` varchar(20) NOT NULL comment '用户名',
	`power_id` int unsigned NOT NULL comment '权限id',
	`created_at` int unsigned NOT NULL comment '创建时间',
	PRIMARY KEY (`id`),
	UNIQUE KEY `role` (`manager_id`,`power_id`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 comment='用户权限表';

create table nm_action_log(
	`id` int unsigned NOT NULL AUTO_INCREMENT comment 'id',
	`manager_id` varchar(20) NOT NULL comment '用户名',
	`role_id` varchar(20) NOT NULL comment '当前所属的角色',
	`power_id` int unsigned NOT NULL comment '权限id',
	`power` int unsigned NOT NULL comment '当前使用的权限',
	`created_at` int unsigned NOT NULL comment '创建时间',
	PRIMARY KEY (`id`),
	UNIQUE KEY `role` (`manager_id`,`power_id`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 comment='操作日志表';