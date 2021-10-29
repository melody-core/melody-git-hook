#!/usr/bin/env node

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
            const dirs = await fs.promises.readdir('./');
            if(dirs.indexOf('.melody')>-1){
                console.log('已存在.melody文件夹');
                const cuDirs = await fs.promises.readdir('.melody');
                if(cuDirs.indexOf('pre-commit')>-1){
                    console.log('已存在pre-commit');
                    console.log('执行git-hook权限移交');
                }else{
                    await this.preCommitDemo();
                }
            }else{
                await fs.promises.mkdir('.melody');
                await this.preCommitDemo();
            }
            await this.moveControl();
            await this.addControl();
            console.log('melody-git-hook初始化工作已成功完成');
        } catch (error) {
            throw error;
        }
    }
    preCommitDemo = async ()=>{
        await fs.promises.writeFile('.melody/pre-commit', "echo pre-commit", "utf-8")
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

module.exports = Main;


