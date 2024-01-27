import time
import socket
from sklearn.datasets import load_iris

def load_docker():
    data = load_iris()

    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    server.bind(("0.0.0.0", 9999))

    server.listen()

    while True:
        client, addr = server.accept()
        print("Connection from ", addr)
        client.send("You are connected!\n".encode())
        client.send(f"{data['data'][:, 0]}\n".encode())
        client.sleep(2)
        client.