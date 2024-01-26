FROM nginx:stable-alpine
# Taking advantages from docker multi-staging, we copy our newly generated build from /app to the nginx html folder -entrypoint of the webserver-
COPY --from=build /app/build /usr/share/nginx/html
# We copy the nginx conf file from our machine to our image
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# We expose the port 80 of the future containers
EXPOSE 80
# And finally we can run the nginx command to start the server
CMD ["nginx", "-g", "daemon off;"]