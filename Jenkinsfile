pipeline {
  agent any
  stages {
    stage('build') {
      agent {
        node {
          label 'NodeJS'
        }

      }
      steps {
        sh '''node -v
yarn install
yarn generate
mv dist /www/wwwroot/star-town.fendy5.cn'''
      }
    }

  }
}