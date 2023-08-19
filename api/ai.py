from decouple import config

from langchain.llms import OpenAI
# from langchain.chat_models.openai import ChatOpenAI
from langchain.agents import create_sql_agent
from langchain.agents.agent_toolkits import SQLDatabaseToolkit
from langchain.sql_database import SQLDatabase
# from langchain_experimental.sql import SQLDatabaseChain
# from langchain.schema import HumanMessage

OPENAI_API_KEY = config('OPENAI_API_KEY')
DATABASE_URL = config('DATABASE_URL')


llm = OpenAI(openai_api_key=OPENAI_API_KEY, temperature=0)
# llm_chat = ChatOpenAI(openai_api_key=OPENAI_API_KEY, temperature=0)
input_db = SQLDatabase.from_uri(DATABASE_URL)
toolkit = SQLDatabaseToolkit(db=input_db, llm=llm)
# db_agent = SQLDatabaseChain(llm=llm_chat,
#                             database=input_db,
#                             verbose=True)

#db_agent.run("kolik řádků je k dispozici?")

agent_executor = create_sql_agent(
    llm=llm,
    toolkit=toolkit,
    verbose=True
)
agent_executor.run("Kolik je naskladněných produktů?")

# def ai_loader():
#     text = "Jaký je dnes den?"
#     messages = [HumanMessage(content=text, temperature=0)]

#     output = llm.predict_messages(messages)

#     print("output", output)


# ai_loader()
