pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 14.4.0', configId: '813e0106-1f9e-4e72-a283-4bb717eec4d2') {
          sh '''node -v
yarn install
yarn generate
mv dist /www/wwwroot/star-town.fendy5.cn'''
        }

      }
    }

  }
}