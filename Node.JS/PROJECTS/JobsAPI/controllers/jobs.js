const getAllJobs = async(req,res)=> {
    res.send('get all jobs');
}
const getJob = async(req,res)=> {
    res.send('get jobs');
}
const createJob = async(req,res)=> {
    res.send('createjobs');
}
const updateJob = async(req,res)=> {
    res.send('update jobs');
}
const deleteJob = async(req,res)=> {
    res.send('delete jobs');
}


module.exports = {getAllJobs, getJob, createJob, updateJob, deleteJob }