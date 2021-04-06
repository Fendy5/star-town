pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''node -v
yarn install
yarn generate
mv dist /www/wwwroot/star-town.fendy5.cn'''
      }
    }

  }
}