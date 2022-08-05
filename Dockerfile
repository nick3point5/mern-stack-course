FROM nick3point5/jupyter-js-net

ARG NB_USER=jovyan
ARG NB_UID=1000
ENV USER ${NB_USER}
ENV NB_UID ${NB_UID}
ENV HOME /home/${NB_USER}

COPY . ${HOME}/Notebooks/

WORKDIR ${HOME}/Notebooks/

USER root
RUN npm install -g yarn
RUN chown -R ${NB_UID} ${HOME}
USER ${NB_USER}

# CMD bash