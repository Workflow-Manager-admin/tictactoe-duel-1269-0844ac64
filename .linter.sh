#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoe-duel-1269-0844ac64/tic_tac_toe_duel
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

