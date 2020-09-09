FROM ubuntu

COPY L1E5/ /home/
RUN apt-get update && apt-get install -y python
RUN python /home/script.py

CMD bash