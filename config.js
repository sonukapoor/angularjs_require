({
    baseUrl: './js',
    out: 'build.js',
    name: 'main',
    findNestedDependencies: true,
    include: ['../node_modules/requirejs/require.js', 'app.js'],
    fileExclusionRegExp: /^(r|build)\.js$/,
    paths: {
        'requireLib': '../node_modules/requirejs/require',
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min',
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min',
        'angular-animate': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-animate',
        'angular-cookies': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-cookies',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route',
        'angular-sanitize': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-sanitize',
        'angular-touch': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-touch',
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min'
    }, 
    shim: {
        //Tell requirejs to pipe in angular"s return variable as "angular"
        angular: {
            exports: 'angular'
        },
        'angular-route': {
          exports: 'ngRoute'
        }
    }
    /*,
    onModuleBundleComplete: function(data) {
        // amd clean the file.
        var fs = module.require('fs');
        var amdclean = module.require('amdclean');
        var outputFile = data.path;
        var cleanedCode = amdclean.clean({
            'filePath': outputFile
        });
        fs.writeFileSync(outputFile, cleanedCode);
    }*/
})

