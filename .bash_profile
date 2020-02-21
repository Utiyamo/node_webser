alias codedir='code . --user-data-dir'
alias myapi='cd /home/workspace_dc/node_webser/MyClassroom/MyClassroom/api'
alias classroom='cd /home/workspace_dc/node_webser/MyClassroom/MyClassroom;'
alias go-nodeweb='cd /home/workspace_dc/node_webser/node_web'
alias myportifolio='cd /home/workspace_dc/node_webser/myPort/portifolio'

alias go-smart='cd /home/smartsuite/Projetos/ProjetoPegasus/'
alias start-docker='sudo systemctl start docker'
alias stop-docker='sudo systemctl stop docker'
alias start-core='bash -x /home/st-dk.sh; cd /home/smartsuite/Projetos/ProjetoPegasus/smartsuite_stacks/stacks/processors/holding; sudo docker stack deploy -c fluxo-core.yml core; go-smart;'
alias start-datax='bash /home/st-dk.sh; cd /home/smartsuite/Projetos/ProjetoPegasus/smartsuite_stacks/stacks/processors/holding; sudo docker stack deploy -c fluxo-datax-center.yml datax; go-smart;'
alias st-dk='cd /home; bash st-dk.sh'
alias open-vpn='cd ~/vpn; sudo openvpn pfSense-UDP4-1195-daniel.carvalho.ovpn'

vpn-connect()
{
    readonly VPN_CONF="$HOME/vpn"

    pushd $VPN_CONF
    sudo -b openvpn *.ovpn
    popd
}


parse_git_branch()
{
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

reset=$(tput sgr0)                                                     
bold=$(tput bold)
black=$(tput setaf 0)
red=$(tput setaf 1)
green=$(tput setaf 2)
yellow=$(tput setaf 3)
blue=$(tput setaf 4)
magenta=$(tput setaf 5)
cyan=$(tput setaf 6)
white=$(tput setaf 7)

USER_HOST="$bold$green\u@\h$reset"
WORK_DIR="$bold$blue\w$reset"
GIT_BRANCH="$bold$yellow\$(parse_git_branch)$reset"

export PS1="$USER_HOST:$WORK_DIR$GIT_BRANCH\n$ "
