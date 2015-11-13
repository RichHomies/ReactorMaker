var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');
var es = require('event-stream');    
var bowerFiles = require('main-bower-files');
var print = require('gulp-print');
var Q = require('q');