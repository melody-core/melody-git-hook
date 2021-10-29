#!/bin/sh

const path = require('path');
const fs = require('fs'); 
const { exec } = require("child_process")

const runShell = (shell) => new Promise((resolve, reject)=>{
    exec(shell, (error, stidio)=> {
        console.log(stidio);
        if(!error){
            resolve('ok');
        }else{
            reject('error');
        }
    });
})


class Main {
    init = async() => {
        try {
            await fs.promises.mkdir(path.resolve(__dirname, '.melody'));
            await this.preCommitDemo();
            await this.moveControl();
            await this.addControl();
        } catch (error) {
            throw error;
        }
    }
    preCommitDemo = async ()=>{
        await fs.promises.writeFile(path.resolve(__dirname, '.melody/pre-commit'), "echo pre-commit", "utf-8")
    } 
    addControl = async () => {
        await runShell(`chmod +x .melody/pre-commit`);
    }
    moveControl = async()=>{
        try {
            await runShell(`git config core.hooksPath .melody`);
        } catch (error) {
            throw error;
        }
        
    } 
}


new Main().init();


