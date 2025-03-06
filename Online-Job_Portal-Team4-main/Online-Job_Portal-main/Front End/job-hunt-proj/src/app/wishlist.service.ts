import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishListEndPoint: string;

  constructor(private httpClient:HttpClient) {
    this.wishListEndPoint='http://2-15-206-157-42.ap-south-1.compute.amazonaws.com:8080/wishlist'

   }

  /*addToWishlist(Job:any) {
    const url=this.wishListEndPoint
    return this.httpClient.post(url,id)
  }
  removeFromWishlist(){
    return this.httpClient.delete(url+)
  }*/
}
