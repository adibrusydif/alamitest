//
//  DeviceModule.swift
//  AlamiAdibTS
//
//  Created by Adib on 14/08/22.
//

import Foundation

@objc(DeviceModule)
class DeviceModule: NSObject{
  
  
  @objc
  func getDeviceId(_ callback:RCTResponseSenderBlock){
    if let uuid = UIDevice.current.identifierForVendor?.uuidString {
        callback([uuid])
    }
  }
  
  @objc
  func getDeviceName(_ callback:RCTResponseSenderBlock){
    let name: String = UIDevice.current.name
    callback([name])
  }

  
  @objc
  static func requiresMainQueueSetup() ->Bool{
    return true;
  }
  
}
