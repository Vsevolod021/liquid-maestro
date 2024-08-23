run: 
	docker run -d -p 80:3000 --env-file .env --name liquid liquid:latest
stop: 
	docker stop liquid