# website

Command to deploy build folder to live website

```
rsync -avz build/* [CSAIL-USERNAME]@groups.csail.mit.edu:/afs/csail.mit.edu/group/visualization/www/data/
```

To log into the CSAIL servers:

```ssh [CSAIL-USERNAME]@login.csail.mit.edu```

To navigate to the website files:

```cd /afs/csail.mit.edu/group/visualization/www/data```
