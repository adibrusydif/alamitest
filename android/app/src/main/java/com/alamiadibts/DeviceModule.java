package com.alamiadibts;

import android.content.ContentResolver;
import android.provider.Settings;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceModule extends ReactContextBaseJavaModule {
   DeviceModule(ReactApplicationContext context) {
       super(context);
   }
   @Override
    public String getName() {
    return "DeviceModule";
   }
    @ReactMethod
    public void getDeviceId(Callback callback){
        String ID = Settings.Secure.getString(getCurrentActivity().getContentResolver(), Settings.Secure.ANDROID_ID);
        callback.invoke(ID);
    }

     @ReactMethod
    public void getDeviceName(Callback callback){
        String Name = Settings.Global.getString(getCurrentActivity().getContentResolver(), Settings.Global.DEVICE_NAME);
        callback.invoke(Name);
    }
}