import React, { useEffect, useState } from "react"
import Repo from "./repo"

export default () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const data = sessionStorage.getItem("repos")
    let myRepos

    if (data) {
      myRepos = JSON.parse(data)
      myRepos = myRepos.slice(1, 13)
      return setRepos(myRepos)
    }

    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/manuelduarte077/repos"
      )
      let myRepos = await response.json()

      sessionStorage.setItem("repos", JSON.stringify(myRepos))

      setRepos(myRepos)
    }

    fetchRepos()
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center">
        <h2 className="text-3xl font-bold">Mi trabajo en open source</h2>
        <p>Colaboración y contribución de código</p>
      </header>

      <ul className="repos-list">
        {repos.map(repo => {
          return <Repo repo={repo} key={repo.id} />
        })}
      </ul>
    </div>
  )
}
