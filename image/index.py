import time
import os
import sys

crazy = os.environ.get("CRAZY", "not working")
print("PYTHON SCRIPT STARTED to stderr", file=sys.stderr, flush=True)

for i in range(2):
    # Use environment variable provided by SST for linked bucket
    bucket_name = os.environ.get("SST_Bucket_MyBucket_name", "BUCKET_NAME_NOT_SET")
    print(f"PYTHON Loop {i}: Crazy={crazy}", file=sys.stderr, flush=True)
    print(f"PYTHON Loop {i}: Bucket={bucket_name}", file=sys.stderr, flush=True)
    
    time.sleep(1)

print("PYTHON SCRIPT FINISHED to stderr", file=sys.stderr, flush=True) 