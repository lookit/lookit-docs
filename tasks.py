from invoke import task, run 
@task
def build(c):
    '''
    builds and serves docummentation static files
    use: invoke build
    return: serving static files at 0.0.0.0:8081
    '''
    run("pip install sphinx-serve")
    run("cd docs && make html && echo 'Serving at 0.0.0.0:8081' && sphinx-serve --build build")
@task
def serve(c):
    '''
    serves docummentation static files
    use: invoke serve
    return: serving static files at 0.0.0.0:8081
    '''
    run("cd docs && make html && echo 'Serving at 0.0.0.0:8081' && sphinx-serve --build build")
    
