FROM nick3point5/jupyter-js-net


ARG NB_USER=jovyan
# ARG NB_UID=1000
# ENV USER ${NB_USER}
# ENV NB_UID ${NB_UID}
ENV HOME /home/${NB_USER}

# USER root

EXPOSE 8888
ENTRYPOINT ["tini", "-g", "--"]

# RUN chown -R ${NB_UID} ${HOME}
# USER ${USER}

COPY . ${HOME}/Notebooks/

WORKDIR ${HOME}/Notebooks/

# CMD bash