import os

for root, dirs, files in os.walk("./src"):
  for filename in files:
    if filename.endswith(".js"):
        os.rename(os.path.join(root, filename), os.path.join(root, filename[:-3] + ".tsx"))