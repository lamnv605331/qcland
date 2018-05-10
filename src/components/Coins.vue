/* eslint-disable */ 
<template>
	<section>
      	<header-cus></header-cus>
		<div>
		    <slider></slider>
		    <productSlider></productSlider>
		    <bottom-cus></bottom-cus>
		</div>
     	<footer-cus></footer-cus>
	</section>
</template>

<script>
	import axios from 'axios'
	import Header from '@/components/Header'
  	import Footer from '@/components/Footer'
  	import Slider from '@/components/Slider'
  	import BottomPage from '@/components/BottomPage'
  	import ProductSlider from '@/components/ProductSlider';
	export default {
		name: "Coins",
		components: {
	      'header-cus': Header,
	      'footer-cus' : Footer,
	      "slider": Slider,
	      'productSlider': ProductSlider,
	      "bottom-cus": BottomPage
	    },
		created(){
			// this.fetchData()
		}
	}
</script>
