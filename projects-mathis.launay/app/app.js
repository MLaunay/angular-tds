angular.module("AppProject",["ngRoute"])
.config(require("./config"))
.controller("myProjectsController",["daoService",require("./controllers/myProjects")])
.controller("projectController",["daoService","$routeParams",require("./controllers/project")])
.controller("storyController",[require("./controllers/story")])
.service("daoService",[require("./services/daoService")]);
//$('#dd').dropdown()
//ui dropdown, ui items