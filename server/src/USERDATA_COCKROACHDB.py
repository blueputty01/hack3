import os
import logging
import random
from math import floor
#npm i psycopg2-binary
from psycopg2.pool import SimpleConnectionPool

logger = logging.getLogger()
logger.setLevel(logging.INFO)

pool = None


def POSTCOCKROACHDB(event, info):
    global pool
    if not pool:
        pool = SimpleConnectionPool(0, 1, dsn=os.environ['postgresql://aditya:E_96sxFnQeXCLBRdcYWNEQ@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster=karmic-kakapo-1943'])
    #pass variables from app.js
    userdata = email + name
    addUserToLearningNFTsDataBase(pool, userdata)

    logger.info("Database initialized.")

    return


def addUserToLearningNFTsDataBase(CONNECTION, n):
    conn = pool.getconn()
    with conn.cursor() as cur:
        cur.execute(
            "CREATE TABLE IF USER DATA IS NOT AVAILABLE ")
        conn.commit()
        while n > 0:
            cur.execute("UPSERT ALL USER DATA(NAME + EMAIL ADDRESS)(DEFAULT, %s)", [
                        CONNECTION])
            logger.info(
                f"Created NEW USER WITH NAME AND EMAIL ADDRESS  {CONNECTION}.")
            n -= 1
        logger.debug(f"addUserToLOCALFOODSDataBase add(): status message: {cur.statusmessage}")
        conn.commit()

#for testing 
email = 'adityabilawar@gmail.com'
name = 'Aditya'