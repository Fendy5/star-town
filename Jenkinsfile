pipeline {
  agent any
  stages {
     stage('Build') {
         steps {
             nodejs(nodeJSInstallationName: 'NodeJS 14.11.0', configId: '813e0106-1f9e-4e72-a283-4bb717eec4d2') {
                 // npm 编译安装
                 sh 'npm install && npm run build'
             }
         }
     }
  }
}
