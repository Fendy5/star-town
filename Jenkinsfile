pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 14.4.0', configId: '813e0106-1f9e-4e72-a283-4bb717eec4d2') {
          sh 'yarn install'
          sh 'yarn generate'
        }

      }
    }

    stage('Deploy') {
      steps {
        sh 'rm -rf /www/wwwroot/star-town.fendy5.cn/dist'
        sh 'mv ./dist /www/wwwroot/star-town.fendy5.cn'
      }
    }

  }
}