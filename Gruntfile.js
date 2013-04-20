module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  , cssmin: {
      compress: {
        options: {
          keepSpecialComments: 0
        }
      , files: {
          'public/dist/css/vendor.css': [
            'public/components/bootstrap/css/bootstrap.min.css',
            'public/components/bootstrap/css/bootstrap-responsive.min.css'
          ]
        , 'public/dist/css/app.css': ['public/css/app.css']
        }
      }
    }
  , concat: {
      vendor: {
        options: {
          stripBanners: true
        }
      , src: [
          'public/components/**/jquery.min.js'
        , 'public/components/**/angular.min.js'
        , 'public/components/**/angular-cookies.min.js'
        , 'public/components/**/angular-resource.min.js'
        , 'public/components/**/bootstrap.min.js'
        ]
      , dest: 'public/dist/js/vendor.js'
      }
    , dist: {
        options: {
          separator: ';'
        }
      , src: [
          'public/js/app.js'
        , 'public/js/controllers/mainCtrl.js'
        ]
      , dest: 'public/dist/js/app.js'
      }
    }
  , uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd.mm.yyyy") %> */\n'
      }
    , dist: {
        files: {
          'public/dist/js/app.js': [ '<%= concat.dist.dest %>' ]
        }
      }
    }
  , jshint: {
      src: [
        'Gruntfile.js'
      , 'app.js'
      , 'public/js/**/*.js'
      , 'routes/**/*.js'
      , 'src/**/*.js'
      ]
    , options: {
        jshintrc: ".jshintrc"
      }
    }
  , copy: {
      options: {
        processContentExclude: ['*']
      }
    , images: {
        files: [
        // copy images to dist
        //   {
        //     expand: true
        //   , cwd: 'public/components/*/img/'
        //   , src: [ '*' ]
        //   , dest: 'public/dist/img/'
        //   }
        // , {
        //     expand: true
        //   , cwd: 'public/img/'
        //   , src: [ '*' ]
        //   , dest: 'public/dist/img/'
        //   }
        ]
      }
    , fonts: {
        // copy fonts to dist
        files: [
          // {
          //   expand: true
          // , cwd: 'public/vendor/font/'
          // , src: [ '*' ]
          // , dest: 'public/dist/font/'
          // }
        ]
      }
    }
  , clean: ['public/dist']
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-clean')


  grunt.registerTask('default',
    [ 'jshint'
    , 'clean'
    , 'concat'
    , 'uglify'
    , 'copy'
    , 'cssmin'
    ]
  )
}
