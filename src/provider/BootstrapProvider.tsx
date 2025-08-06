"use client";

import { useEffect } from "react"

export default function BootstrapProvider () {
		useEffect(()=>{
			import( "bootstrap/dist/js/bootstrap.bundle.min")
		},[])

	return null;

}