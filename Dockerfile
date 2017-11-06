FROM tomcat:8.0.20-jre8
COPY target/FrontendService.war /usr/local/tomcat/webapps/FrontendService.war
