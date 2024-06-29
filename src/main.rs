use std::io::prelude::*;
use std::net::{TcpListener, TcpStream};
use std::fs::File;
use std::io::Read;
use std::env;
use std::path::Path;

fn main() {
    let listener = TcpListener::bind("0.0.0.0:7878").expect("Could not bind to address");
    println!("Server running on http://0.0.0.0:7878");

    for stream in listener.incoming() {
        match stream {
            Ok(stream) => handle_connection(stream),
            Err(e) => eprintln!("Failed to establish a connection: {}", e),
        }
    }
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 1024];
    if let Err(e) = stream.read(&mut buffer) {
        eprintln!("Failed to read from stream: {}", e);
        return;
    }

    let get = b"GET / HTTP/1.1\r\n";

    if buffer.starts_with(get) {
        let current_dir = env::current_dir().unwrap();
        let file_path = current_dir.join("src/views/home.html");
        
        let mut file = match File::open(&file_path) {
            Ok(file) => file,
            Err(e) => {
                eprintln!("Failed to open file: {}", e);
                let response = "HTTP/1.1 500 INTERNAL SERVER ERROR\r\n\r\n";
                stream.write(response.as_bytes()).unwrap();
                stream.flush().unwrap();
                return;
            }
        };
        
        let mut contents = String::new();
        if let Err(e) = file.read_to_string(&mut contents) {
            eprintln!("Failed to read file contents: {}", e);
            let response = "HTTP/1.1 500 INTERNAL SERVER ERROR\r\n\r\n";
            stream.write(response.as_bytes()).unwrap();
            stream.flush().unwrap();
            return;
        }

        let response = format!(
            "HTTP/1.1 200 OK\r\nContent-Length: {}\r\nContent-Type: text/html\r\n\r\n{}",
            contents.len(),
            contents
        );

        stream.write(response.as_bytes()).unwrap();
        stream.flush().unwrap();
    } else {
        let status_line = "HTTP/1.1 404 NOT FOUND\r\n\r\n";
        let contents = "404 Not Found";
        let response = format!("{}{}", status_line, contents);

        stream.write(response.as_bytes()).unwrap();
        stream.flush().unwrap();
    }
}
